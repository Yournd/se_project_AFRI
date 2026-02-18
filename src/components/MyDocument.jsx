import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: { padding: 30 },
  section: { margin: 10, padding: 10 },
  title: { fontSize: 20, textAlign: "center", marginBottom: 20 },
  item: { fontSize: 12, marginBottom: 5 },
});

const MyDocument = ({ data }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.title}>Analysis Full Summary</Text>
        {data.map((change) => (
          <View key={change.id} style={styles.item}>
            <Text>Label: {change.label}</Text>
            <Text>Description: {change.description}</Text>
            <Text>Ux Impact: {change.uxImpact}</Text>
            <Text>Accessibility Impact: {change.accessibilityImpact}</Text>
            <Text>WcaggAA pass: {change.wcagAA_normal_pass}</Text>
            <Text>Accessibility Notes: {change.accessibilityNotes}</Text>
            <Text>Recommended Fixes: {change.recommendedFixes}</Text>
            <Text>Mobile Impact: {change.mobileImpact}</Text>
          </View>
        ))}
      </View>
    </Page>
  </Document>
);

export default MyDocument;
