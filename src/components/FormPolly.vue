<template>
    <div>
        <h1>Formulario Polly</h1>
        <form @submit.prevent="onSubmit">
            <textarea v-model="mensaje" name="" id="" cols="30" rows="5"></textarea>
            <button type="submit">Convertir</button>
        </form>
        <ul>
            <li >
                <audio controls>
                    <source src="https://gfourmis-demo-services.s3.amazonaws.com/GFourmis-Bienvenida-Test-Nestor-4ce5fda5df0e46f3b64de50d730a7437.mp3" type="audio/mpeg">
                </audio>
            </li>
        </ul>
    </div>
</template>

<script>
import Service from '@/services/index';

export default {
    data() {
        return {
            mensaje: '',
            mp3Url: null
        }
        
    },
    methods: {
        onSubmit() {
            console.log('funciona', this.mensaje)
            const data = {
                "text": this.mensaje,
                "outputFormat": "mp3",
                "voiceId": "Miguel",
                "fileName": "GFourmis-Bienvenida-Test-Nestor"
            };            

            Service.textToAudio(data).then((response) => {
                console.log(response);
                this.onClear()
                this.mp3Url = response['data']['filePath']
                if(this.mp3Url) {
                    var audio = new Audio(this.mp3Url);
                    audio.play();
                }
            }).catch((error) => {
                console.log(error);
            });
        },
        onClear() {
            this.mensaje = ''
        }
    },

    mounted() {

    }
}
</script>