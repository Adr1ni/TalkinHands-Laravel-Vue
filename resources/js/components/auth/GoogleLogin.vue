<script setup>
import { decodeCredential } from 'vue3-google-login'
const callback = (response) => {
  // decodeCredential will retrive the JWT payload from the credential
  const userData = decodeCredential(response.credential)
  console.log("Handle the userData", userData)
}
</script>

<template>
  <GoogleLogin :callback="callback" prompt auto-login/>
</template>















