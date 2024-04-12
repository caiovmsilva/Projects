<template>
    <div id="showResult" v-if="showResult"></div>
    <div id="tripResultContent">
        <div id="text">
            Estas são as melhores alternativas de 
            viagem para a data selecionada
        </div>
    </div>
    <div id="triResultCards">
        <VaCard>
            <VaCardBlock
            class="cardTripBlockContainer">
                    <div class="cardTripInfoContainer">
                        <div id="cardTripConfort">
                            <VaCard class="cardTripContent"
                            color="#f0f0f0"
                            >
                                <div class="cardImage">
                                    <img src="../assets/palm_up_blue.png"/>   
                                </div>
                                <div class="cardTripInfo">
                                    <VaCardTitle style="font-size: Large; font-weight: bold; padding-bottom: 10px;">{{ name_fastest_trip }}</VaCardTitle>
                                    <VaCardContent style="padding-bottom: 10px; font-size: 18px;">Leito: {{ bed }} (Completo)</VaCardContent>
                                    <VaCardContent style="font-size: 18px;">Tempo estimado: {{ duration_fast }}</VaCardContent>                                    
                                </div>

                            </VaCard>
                            
                        </div>
                        <div class="cardTripPrice">
                            <VaCard class="cardTripContent Price"
                            color="#f0f0f0"
                            >
                                <VaCardTitle style="font-size: medium; font-weight: bold;"
                                
                                >
                                Preço</VaCardTitle>
                                <VaCardContent style="font-size: 20px;">{{ price_confort }}</VaCardContent>
                            </VaCard>
                        </div>
                    </div>
            </VaCardBlock>
        </VaCard>
        <VaCard>
                
            <VaCardBlock class="cardTripBlockContainer">
                    <div class="cardTripInfoContainer">
                        <div id="cardTripEcon"> 
                            <VaCard class="cardTripContent"
                            color="#f0f0f0"
                            
                            >
                                <div class="cardImage">
                                    <img src="../assets/on_time.png"/>
                                </div>
                                <div class="cardTripInfo">
                                    <VaCardTitle style="font-size: large; font-weight: bold; padding-bottom: 10px">{{ name_cheapest_trip }}</VaCardTitle>
                                    <VaCardContent style="padding-bottom: 10px; font-size: 18px">Poltrona: {{ seat }} (convencional)</VaCardContent>
                                    <VaCardContent style="font-size: 18px;">Tempo estimado: {{ duration_cheap }}</VaCardContent>
                                </div>
                                
                            </VaCard>
                            
                        </div>
                        <div class="cardTripPrice">
                            <VaCard class="cardTripContent Price"
                            color="#f0f0f0" vertical
                            >
                                <VaCardTitle style="font-size: medium; font-weight: bold;">Preço</VaCardTitle>
                                <VaCardContent style="font-size: 20px;">{{ price_econ }}</VaCardContent>
                            </VaCard>
                        </div>
                    </div>
            </VaCardBlock>
        </VaCard>  
    </div>

    <div id="cleanButton">
            <VaButton
            color= "#FFBA3B"
            style="width: 200px; height: 40px;"
            @click="restartBtn()"
            >Limpar</VaButton>  
        </div>
</template>

<script>

export default {
    name: 'TripResult',

    props: {
        price_econ: String,
        price_confort: String,
        name_fastest_trip: String,
        name_cheapest_trip: String,
        duration_fast: String,
        duration_cheap: String,
        seat: String,
        bed: String,
    },

    methods: {
        restartBtn(){
            window.location.reload()
        }
    }
}

</script>

<style scoped>

#text{
    font-size: larger;
}

.cardTripBlockContainer{
    display:flex;
    flex-direction: row;
    margin-block: 20px;
}

.cardTripInfoContainer{
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 20px;
    border-radius: 20px;
}

.cardTripContent{
    display: flex;
    align-items: center;
    justify-items: flex-start;
    background-color: #f0f0f0;
    /* margin-inline: 20px; */
}

.cardTripContent.Price{
    height: 100%;
    width: 200px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
}

.cardImage{
    background-color: #2EA0AB;
    height: 131px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100px;
}

.cardTripInfo{
    width: 100%;

}

.cardTripPrice{
    height: 100%;
    display: flex;
    align-items: center
}

#cardTripConfort{
    width: 100%;
    height: 100%;
}

#cardTripEcon{
    width: 100%;
}

#cleanButton{
    display: flex;
    justify-content: flex-end;
}

</style>