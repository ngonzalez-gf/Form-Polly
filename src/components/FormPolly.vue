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
                    <source src="" type="audio/mpeg">
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
            mensaje: ''
        }
        
    },
    methods: {
        onSubmit() {
            console.log('funciona', this.mensaje)
            const data = {
                "text": this.mensaje,
                "outputFormat": "mp3",
                "voiceId": "Penelope",
                "fileName": "GFourmis-Bienvenida-Test-Nestor"
            };

            Service.textToAudio(data).then((response) => {
                console.log(response);
            }).catch((error) => {
                console.log(error);
            });
        }
    }
}
</script>