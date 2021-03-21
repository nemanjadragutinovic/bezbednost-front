<template>
<div>
    <div>
        <header>
            <b-nav class="tabs" align="center" tabs>
                <router-link to="/adminForm" tag="b-nav-item">Админ</router-link>
                <router-link to="/userForm" tag="b-nav-item">Корисник</router-link>
                <router-link to="/certList" tag="b-nav-item">Листа сертификата</router-link>
            </b-nav>
        </header>
    </div>
</div>
</template>

<script>

export default {
  components: {
  } ,
    
}
</script>

<style>

body {
    background-image: url('https://png.pngtree.com/thumb_back/fw800/back_pic/00/11/26/5356376b0b393f6.jpg');
    background-repeat: repeat;
}

header {
    background: whitesmoke;
    
}

.tabs {
    height: 60px;
    line-height: 40px;
    
    font-size: 20px;
}

</style>