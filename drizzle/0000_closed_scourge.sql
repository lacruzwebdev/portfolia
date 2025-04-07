CREATE TABLE `portfolio-generator_portfolio` (
	`id` text PRIMARY KEY NOT NULL,
	`user_id` text NOT NULL,
	`nombre` text NOT NULL,
	`apellidos` text NOT NULL,
	`titulo` text NOT NULL,
	`idiomas` text NOT NULL,
	`bio` text NOT NULL,
	`habilidades` text NOT NULL,
	`educacion` text NOT NULL,
	`experiencia` text NOT NULL,
	`createdAt` integer DEFAULT (unixepoch()) NOT NULL,
	`updatedAt` integer
);
--> statement-breakpoint
CREATE INDEX `user_id_idx` ON `portfolio-generator_portfolio` (`user_id`);