// Example model schema from the Drizzle docs
// https://orm.drizzle.team/docs/sql-schema-declaration

import { sql } from "drizzle-orm";
import { index, sqliteTableCreator } from "drizzle-orm/sqlite-core";
import { type Educacion, type Experiencia, type Idioma } from "@/types/portfolio";

/**
 * This is an example of how to use the multi-project schema feature of Drizzle ORM. Use the same
 * database instance for multiple projects.
 *
 * @see https://orm.drizzle.team/docs/goodies#multi-project-schema
 */
export const createTable = sqliteTableCreator(
  (name) => `portfolio-generator_${name}`,
);

export const portfolios = createTable(
  "portfolio",
  (d) => ({
    id: d.text("id").primaryKey(),
    userId: d.text("user_id").notNull(), // ID del usuario de Clerk
    nombre: d.text("nombre").notNull(),
    apellidos: d.text("apellidos").notNull(),
    titulo: d.text("titulo").notNull(),
    idiomas: d.text("idiomas", { mode: "json" }).$type<Idioma[]>().notNull(),
    bio: d.text("bio").notNull(),
    habilidades: d.text("habilidades").notNull(),
    educacion: d.text("educacion", { mode: "json" }).$type<Educacion[]>().notNull(),
    experiencia: d.text("experiencia", { mode: "json" }).$type<Experiencia[]>().notNull(),
    imagenPerfil: d.text("imagen_perfil"),
    createdAt: d
      .integer({ mode: "timestamp" })
      .default(sql`(unixepoch())`)
      .notNull(),
    updatedAt: d.integer({ mode: "timestamp" }).$onUpdate(() => new Date()),
  }),
  (t) => [index("user_id_idx").on(t.userId)],
);

