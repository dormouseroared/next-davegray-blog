export default function getFormattedDate(dateString) {
  return new Intl.DateTimeFormat("en-GB", {
    dateStyle: "long",
  }).format(new Date(dateString))
}
