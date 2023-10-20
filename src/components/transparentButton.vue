<template>
        <a href="/exchange">{{ buttonText }}</a>
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
    border: 1px solid #18181B;
    outline: 0;
    padding: 9px 33px;
    background-color: #fff;
    text-decoration: none;
}
</style>
  