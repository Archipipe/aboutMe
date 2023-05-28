<template>
  <div class="Signup">
    <div class="inner">
      <div>
        <div>
          <h2>Записаться на занятия</h2>
          <span
            >Оставь заявку, чтобы обсудить первый урок и узнать твой уровень
            знаний</span
          >
        </div>
        <div>
          <span>8-800-555-35-35</span>
          <nav>
            <vkIcon />
            <telegramIcon />
            <skypeIcon />
          </nav>
        </div>
      </div>
      <div>
        <form ref="form" @submit.prevent="sendEmail">
          <input
            type="text"
            placeholder="Ваше имя"
            name="user_name"
            v-model="formData.name"
          />
          <span
            v-show="!isSent"
            v-for="error in v$.name.$errors"
            :key="error.$uid"
            class="text-red-500"
          >
            Необходимо ввести ваше имя
          </span>
          <input
            type="text"
            placeholder="E-mail"
            name="user_email"
            v-model="formData.email"
          />
          <span
            v-show="!isSent"
            v-for="error in v$.email.$errors"
            :key="error.$uid"
            class="text-red-500"
          >
            Необходимо ввести вашу почту
          </span>
          <textarea
            type="text"
            placeholder="Немного о себе"
            name="message"
            v-model="formData.message"
          />
          <span
            v-show="!isSent"
            v-for="error in v$.message.$errors"
            :key="error.$uid"
            class="text-red-500"
          >
            Необходимо узнать хоть что-то о вас
          </span>

          <input type="submit" value="ОСТАВИТЬ ЗАЯВКУ" />
          <span v-show="isSent" class="good">Письмо отправлено :)</span>
        </form>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, reactive, computed } from "vue";

import useVuelidate from "@vuelidate/core";
import { required, email } from "@vuelidate/validators";

import skypeIcon from "../SocialComponents/skypeIcon.vue";
import telegramIcon from "../SocialComponents/telegramIcon.vue";
import vkIcon from "../SocialComponents/vkIcon.vue";

import emailjs from "@emailjs/browser";

const formData = reactive({
  name: "",
  email: "",
  message: "",
});

const rules = computed(() => {
  return {
    name: { required },
    email: { required, email },
    message: { required },
  };
});
const v$ = useVuelidate(rules, formData);

const isSent = ref(false);
const form = ref<HTMLFormElement>();
const sendEmail = async () => {
  const result = await v$.value.$validate();

  if (result) {
    emailjs.sendForm(
      "service_9xkzlft",
      "template_i3qvo9q",
      form.value!,
      "Wx5VZXyzH8ZhuzBcJ"
    );

    formData.name = "";
    formData.email = "";
    formData.message = "";
    isSent.value = true;
  } else {
    isSent.value = false;
  }
};
</script>

<style scoped lang="scss">
.Signup {
  margin: 0 auto;
  padding: 0 20%;
  margin-bottom: 10%;
}

.inner {
  display: flex;
  padding: 4% 10%;
  background: linear-gradient(180deg, #abe2ff 0%, #e7f7ff 100%);
  border-radius: 30px;

  //Буковки
  & > div:first-of-type {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    gap: 20%;
    & > div:first-of-type {
      h2 {
        font-weight: 600;
        font-size: 40px;
        padding-bottom: 20px;
      }
      span {
        display: block;
        font-size: 16px;
        width: 75%;
      }
    }
    & > div:last-of-type {
      span {
        display: block;
        font-weight: 500;
        font-size: 26px;
        margin-bottom: 3%;
      }
      nav {
        display: flex;
        gap: 0 3%;
      }
    }
  }
  // Кнопки
  & > div:last-of-type {
    width: 70%;
    input:not([type="submit"]),
    textarea {
      font-size: 16px;
      resize: none;
      width: 100%;
      box-sizing: border-box;
      display: block;
      -webkit-box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset;
      -moz-box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset;
      box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset;
      padding: 18px 25px;
      border-radius: 60px;
      border: none;
      background-color: $input_color;
      outline: none;
      margin-top: 5%;
    }

    textarea {
      border-radius: 30px;
      height: 100px;
    }

    input[type="submit"] {
      margin-top: 5%;
      width: calc(100% - 20px);
      font-family: "Montserrat", sans-serif;
      text-transform: uppercase;
      font-size: 14px;
      font-weight: 500;
      border: none;
      padding: 14px 10px;
      cursor: pointer;
      box-sizing: content-box;
      background-color: $button_default;
      border-radius: 60px;
      transition: background-color 0.15s ease, color 0.15s ease;

      &:hover {
        background-color: $button_hover;
        color: white;
      }
    }

    span {
      display: block;
      text-align: center;
      font-weight: 500;
      color: red;
      transition: all 5s ease;
    }
    .good {
      margin-top: 2%;
      color: rgb(23, 217, 23);
    }
  }
}
</style>
