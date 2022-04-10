<template>
  <div class="cuc-reporter">
    <form>
      <input>
    </form>
  </div>
</template>

<script>
export default {
  name: "CucReporter",
  data() {
    return {
      url: "",
      lat: "",
      lon: "",
    };
  },
  methods() {
    return {
      sendPostRequest() {
        const data = {
          url: this.url,
          lat: this.lat,
          lon: this.lon,
        };
        const headers = {
          "Content-Type": "application/json",
        };
        const options = {
          method: "POST",
          headers,
          body: JSON.stringify(data),
        };
        fetch("/api/v1/report", options)
          .then((response) => {
            if (response.ok) {
              return response.json();
            }
            throw new Error("Network response was not ok.");
          })
          .then((response) => {
            console.log(response);
          })
          .catch((error) => {
            console.log(error);
          });
      },
      }
    };
  }
}
</script>

<style scoped>

</style>
