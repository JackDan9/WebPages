<template>
    <div>
        <h1 class="header"> {{ this.message || "发生了不知名的错误" }} </h1>
    </div>
</template>
<script>
    export default {
        props: {
            message: String
        }
    }
</script>