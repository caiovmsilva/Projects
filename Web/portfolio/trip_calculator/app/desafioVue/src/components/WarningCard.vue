<template>
    <VaCard v-if="isWarningCardOpen" id="card">
      <VaCardContent id="cardContent">
        <div id="cardIcon">
            <img src="../assets/warning.png">
        </div>
        <div id="cardText">
            Insira os valores para realizar a contação.
        </div>
        <div id="closeButton">
            <VaButton
            text-color="#2c3e50"
            color="#2EA0AB"
            style="width: 200px; height: 40px;"
            @click="closeWarningCard"
            >
            Fechar
        </VaButton>
        </div>
        
      </VaCardContent>
    </VaCard>
  </template>

<script>
export default{
    name: 'WarningCard',

    data(){
        return {
            isWarningCardOpen: true // At first WarningCard is Open
        }
    },

    methods: {
        closeWarningCard(){
            this.isWarningCardOpen = false; // Change state to close WarningCard
        }
    }
}
</script>

<style scoped>

#card{
    font-family:system-ui, -apple-system, BlinkMacSystemFont, 
    'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 
    'Open Sans', 'Helvetica Neue', sans-serif;
    width: 500px;
    height: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 20px

}

#cardContent{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto;
    max-width: 340px;
}

#cardIcon{
    padding-block: 20px;
}

#cardText{
    font-size: x-large;
    padding-block: 20px;
    text-align: center;
}

#closeButton{
    display: flex;
    justify-content: center;
    padding-block: 20px;
}

</style>