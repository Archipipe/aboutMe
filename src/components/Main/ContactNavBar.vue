<template>
  <header>
    <div class="header">
      <div class="headerLogo"><span>Зимин</span><span>Игнат</span></div>
      <nav class="headerNav">
        <a
          href="#About"
          v-smooth-scroll="{
            duration: 1000,
            offset: -50,
          }"
        >
          Обо мне
        </a>
        <a
          href="#Whyme"
          v-smooth-scroll="{
            duration: 1000,
            offset: -50,
          }"
          >Почему я?</a
        >
        <a
          href="#Reviews"
          v-smooth-scroll="{
            duration: 1000,
            offset: -50,
          }"
          >Ученики</a
        >
        <a
          href="#Contact"
          v-smooth-scroll="{
            duration: 1000,
            offset: -50,
          }"
          >Контакты</a
        >
      </nav>
      <div class="headerContacts">
        <div><img :src="phoneIcon" /><span>8-800-555-35-35</span></div>
        <div><img :src="mailIcon" /><span>jopa@gmail.ru</span></div>
      </div>
    </div>
  </header>
</template>

<script lang="ts" setup>
import phoneIcon from "@/assets/SocialImages/phone_icon.svg";
import mailIcon from "@/assets/SocialImages/mail_icon.svg";
</script>

<style lang="scss" scoped>
header {
  font-family: "Inter", sans-serif;
  width: 100%;
  height: 80px;
  background-color: $main_color;
  .header {
    width: 60%;
    height: 100%;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}

.headerLogo {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  line-height: 0.8;
  user-select: none;
  span:first-of-type {
    font-size: 24px;
  }
  span:last-of-type {
    font-weight: 500;
    font-size: 22px;
    color: $intensive;
  }
}
.headerNav {
  display: flex;
  width: 40%;
  justify-content: space-between;
  a {
    text-decoration: none;
    cursor: pointer;
    font-family: inherit;
    font-size: 18px;
    color: $nav_default;
    background: none;
    border: none;
    transition: color 0.2s ease;

    &:hover {
      color: #000;
    }
  }
}

.headerContacts {
  display: flex;
  height: 60%;
  justify-content: space-between;
  flex-direction: column;
  font-family: "Montserrat", sans-serif;
  font-size: 16px;
  font-weight: 500;

  & > div {
    display: inherit;
    align-items: center;
    gap: 5px;
    color: $intensive;

    & > img {
      width: 20px;
      height: auto;
    }
  }

  & > div:first-child {
    letter-spacing: -0.05em;
  }
}
</style>
