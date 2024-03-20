export default function paginationFromHydraView(data) {
  return {
    current: data["@id"].replace("/entreprise?page=", ""),
    first: Object.prototype.hasOwnProperty.call(data, "hydra:first")
      ? data["hydra:first"].substring(data["hydra:first"].length - 1)
      : null,
    previous: Object.prototype.hasOwnProperty.call(data, "hydra:previous")
      ? data["hydra:previous"].substring(data["hydra:previous"].length - 1)
      : null,
    next: Object.prototype.hasOwnProperty.call(data, "hydra:next")
      ? data["hydra:next"].substring(data["hydra:next"].length - 1)
      : null,
    last: Object.prototype.hasOwnProperty.call(data, "hydra:last")
      ? data["hydra:last"].substring(data["hydra:last"].length - 1)
      : null,
  };
}
