import { Document, Page, Text, View, StyleSheet, Image } from '@react-pdf/renderer'
import type { Portfolio } from '@/types/portfolio'

const styles = StyleSheet.create({
  page: {
    padding: 30,
    backgroundColor: '#ffffff',
    color: '#09090B',
    fontSize: 10, // Reducimos el tamaño base de la fuente
  },
  header: {
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#E4E4E7',
    borderRadius: 6,
    paddingVertical: 6,
    paddingHorizontal: 6,
    flexDirection: 'row',
    display: 'flex',
    alignItems: 'center',
    gap: 15,
  },
  headerContent: {
    flex: 1,
  },
  name: {
    fontSize: 20,
    marginBottom: 2,
    fontFamily: 'Helvetica-Bold',
    color: '#09090B',
  },
  title: {
    fontSize: 12,
    color: '#71717A',
  },
  section: {
    marginBottom: 15,
    backgroundColor: '#FAFAFA',
    padding: 12,
    borderRadius: 6,
  },
  sectionTitle: {
    fontSize: 12,
    fontFamily: 'Helvetica-Bold',
    marginBottom: 8,
    color: '#09090B',
  },
  text: {
    fontSize: 10,
    lineHeight: 1.4,
    color: '#71717A',
  },
  grid: {
    flexDirection: 'row',
    gap: 15,
  },
  sidebar: {
    width: '30%',
  },
  main: {
    width: '70%',
  },
  experienceItem: {
    marginBottom: 10,
    padding: 8,
    backgroundColor: '#ffffff',
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#E4E4E7',
  },
  experienceTitle: {
    fontSize: 11,
    fontFamily: 'Helvetica-Bold',
    color: '#09090B',
  },
  experienceCompany: {
    fontSize: 10,
    color: '#71717A',
    marginBottom: 2,
  },
  experienceDate: {
    fontSize: 9,
    color: '#A1A1AA',
    marginBottom: 4,
  },
  experienceDescription: {
    fontSize: 9,
    color: '#71717A',
    lineHeight: 1.4,
  },
  profileImage: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  languageItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 6,
    padding: 6,
    backgroundColor: '#ffffff',
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#E4E4E7',
  },
  languageName: {
    fontSize: 10,
    color: '#09090B',
  },
  languageLevel: {
    fontSize: 9,
    color: '#71717A',
    backgroundColor: '#F4F4F5',
    padding: '2 4',
    borderRadius: 2,
  },
  skillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 4,
  },
  skillItem: {
    fontSize: 9,
    color: '#FFF',
    backgroundColor: '#0a66c2',
    padding: '4 6',
    borderRadius: 4,
  },
})

export function PortfolioPDF({ portfolio }: { portfolio: Portfolio }) {
  const skills = portfolio.habilidades.split(',').map(skill => skill.trim())

  // Limitar la descripción a un número máximo de caracteres
  const truncateText = (text: string, maxLength: number) => {
    if (text.length <= maxLength) return text
    return text.substring(0, maxLength) + '...'
  }

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          {portfolio.imagenPerfil && (
            // eslint-disable-next-line jsx-a11y/alt-text
            <Image src={portfolio.imagenPerfil} style={styles.profileImage} />
          )}
          <View style={styles.headerContent}>
            <Text style={styles.name}>{portfolio.nombre} {portfolio.apellidos}</Text>
            <Text style={styles.title}>{portfolio.titulo}</Text>
          </View>
        </View>

        <View style={styles.grid}>
          <View style={styles.sidebar}>
            {/* Idiomas */}
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Idiomas</Text>
              {portfolio.idiomas.map((idioma, index) => (
                <View key={index} style={styles.languageItem}>
                  <Text style={styles.languageName}>{idioma.idioma}</Text>
                  <Text style={styles.languageLevel}>Nivel {idioma.nivel}</Text>
                </View>
              ))}
            </View>

            {/* Habilidades */}
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Habilidades</Text>
              <View style={styles.skillsContainer}>
                {skills.map((skill, index) => (
                  <Text key={index} style={styles.skillItem}>
                    {skill}
                  </Text>
                ))}
              </View>
            </View>
          </View>

          <View style={styles.main}>
            {/* Bio */}
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Sobre mí</Text>
              <Text style={styles.text}>{truncateText(portfolio.bio, 300)}</Text>
            </View>

            {/* Experiencia */}
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Experiencia</Text>
              {portfolio.experiencia.map((exp, index) => (
                <View key={index} style={styles.experienceItem}>
                  <Text style={styles.experienceTitle}>{exp.cargo}</Text>
                  <Text style={styles.experienceCompany}>{exp.empresa}</Text>
                  <Text style={styles.experienceDate}>
                    {exp.fechaInicio} - {exp.fechaFin}
                  </Text>
                  <Text style={styles.experienceDescription}>
                    {truncateText(exp.descripcion, 150)}
                  </Text>
                </View>
              ))}
            </View>

            {/* Educación */}
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Educación</Text>
              {portfolio.educacion.map((edu, index) => (
                <View key={index} style={styles.experienceItem}>
                  <Text style={styles.experienceTitle}>{edu.titulo}</Text>
                  <Text style={styles.experienceCompany}>{edu.institucion}</Text>
                  <Text style={styles.experienceDate}>
                    {edu.fechaInicio} - {edu.fechaFin}
                  </Text>
                  <Text style={styles.experienceDescription}>
                    {truncateText(edu.descripcion, 150)}
                  </Text>
                </View>
              ))}
            </View>
          </View>
        </View>
      </Page>
    </Document>
  )
}