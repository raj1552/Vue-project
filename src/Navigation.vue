<template>
  <header>
    <nav :class="{ scrollednav: scrollposition }">
      <div class="Brand">
        <img src="src/assets/GitHub-Mark.png" alt="" />
      </div>
      <ul v-show="!mobile" class="navigation">
        <li>
          <router-link class="link" :to="{ name: 'home' }">Home</router-link>
        </li>
        <li>
          <router-link class="link" :to="{ name: '' }">Who we are</router-link>
        </li>
        <li>
          <router-link class="link" :to="{ name: '' }">Annual Reports</router-link
          >
        </li>
        <li>
          <router-link class="link" :to="{ name: '' }">Careers</router-link>
        </li>
        <li>
          <router-link class="link" :to="{ name: '' }">Gallery</router-link>
        </li>
        <li>
          <router-link class="link" :to="{ name: '' }">Contact us</router-link>
        </li>
      </ul>
      <div class="icon">
        <i
          @click="togglemobileNav"
          v-show="mobile"
          class="fa-sharp fa-regular fa-bars-staggered"
          :class="{ 'icon-active': mobilenav }"
        ></i>
      </div>
      <transition class="mobile-nav">
        <ul v-show="mobilenav" class="dropdown-nav">
          <li>
            <router-link class="link" :to="{ name: 'home' }">Home</router-link>
          </li>
          <li>
            <router-link class="link" :to="{ name: '' }">Who we are</router-link
            >
          </li>
          <li>
            <router-link class="link" :to="{ name: '' }">Annual Reports</router-link
            >
          </li>
          <li>
            <router-link class="link" :to="{ name: '' }">Careers</router-link>
          </li>
          <li>
            <router-link class="link" :to="{ name: '' }">Gallery</router-link>
          </li>
          <li>
            <router-link class="link" :to="{ name: '' }" >Contact us</router-link
            >
          </li>
        </ul>
      </transition>
    </nav>
  </header>
</template>
<script>
export default {
  name: "navigation",
  data() {
    return {
      scrollposition: null,
      mobile: null,
      mobilenav: null,
      windowwidth: null,
    };
  },
  created() {
    window.addEventListener("resize", this.checkscreen);
    this.checkscreen();
  },
  methods: {
    togglemobileNav() {
      this.mobilenav = !this.mobilenav;
    },
    checkscreen() {
      this.windowwidth = window.innerWidth;
      if (this.windowwidth <= 950) {
        this.mobile = true;
        return;
      }
      this.mobile = false;
      this.mobilenav = false;
      return;
    },
  },
};
</script>

<style lang="scss" scoped>
header {
  background-color: rgb(32, 32, 32);
  z-index: 99;
  width: 100%;
  position: fixed;
  transition: 0.5s ease all;
  color: #fff;

  nav {
    position: relative;
    display: flex;
    flex-direction: row;
    transition: 0.5 ease all;
    width: 100%;
    margin: 0 auto;

    @media (min-width: 1140px) {
      max-width: 1140px;
    }
    ul,
    .list {
      font-weight: 500px;
      color: #fff;
      list-style: none;
      text-decoration: none;
    }
    li {
      cursor: pointer;
      text-transform: uppercase;
      padding: 16px;
      margin-left: 16px;
    }
    .link {
      font-size: 14px;
      transition: 0.5s ease all;
      padding-bottom: 14px;
      border-bottom: 1px solid transparent;

      &:hover ,
      link{
        color: aqua;
        border-color: aqua;
      }
    }

    .Brand {
      display: flex;
      align-items: center;
    }
    img {
      width: 50px;
      transition: 0.5s ease all;
    }
    .navigation {
      display: flex;
      align-items: center;
      flex: 1;
      justify-content: flex-end;
    }
    .icon {
      display: flex;
      align-items: center;
      position: absolute;
      top: 0;
      right: 24px;
      height: 100%;

      i {
        color: #ffff;
        cursor: pointer;
        font-size: 24px;
        transition: 0.8s ease all;
      }
    }

    .icon-active {
      transform: rotate(180deg);
    }
    .dropdown-nav {
      display: flex;
      flex-direction: column;
      position: fixed;
      width: 100%;
      max-width: 250px;
      height: 100%;
      background-color: #fff;
      top: 0;
      left: 0;
      li {
        margin-left: 0;
        .link {
          color: black;
        }
      }
    }

    .mobile-nav-enter-active,
    .mobile-nav-leave-active {
      transition: transform 1s ease;
    }

    .mobile-nav-enter-from,
    .mobile-nav-leave-to {
      transform: translateX(-250px);
    }

    .mobile-nav-enter-to {
      transform: translateX(0);
    }
  }
}
</style>
