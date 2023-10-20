<template>
        <a href="/login">{{ buttonText }}</a>
</template>
  
<script>
export default {
    props: {
        buttonText: {
            type: String,
            required: true
        },
        to: {
            type: String,
            required: true
        }
    }
}
</script>
  
<style scoped>
/* Стилизуйте кнопку по своему вкусу */
a {
    color: #18181B;
    text-align: center;
    font-size: 16px;
    line-height: normal;
    letter-spacing: 0.1px;
    border-radius: 4px;
    outline: 0;
    padding: 9px 33px;
    border: 1px solid #4CFDC7;
    background: #4CFDC7;
    text-decoration: none;
}
</style>
  