<template>
  <div>
  
</div>
</template>

<script>
import axios from 'axios';

  axios.get("https://api.coindesk.com/v1/bpi/currentprice.json")
        .then(response => {
           // this.datas = response.data
            console.log(response.data.disclaimer);
        })
       .catch(function (error) {
             console.log(error);
        });
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
