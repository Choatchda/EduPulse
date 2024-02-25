<template>
  <div class="sign-up">
    <div class="overlap-wrapper">
      <div class="overlap">
        <div class="rectangle"></div>
      
        <div class="group">
          <div class="overlap-group-wrapper">
            <div class="overlap-group">
              <div class="text-wrapper">First name</div>
            </div>
          </div>
          <div class="div-wrapper">
            <div class="overlap-group">
              <div class="div">Last name</div>
            </div>
          </div>
          <div class="group-2">
            <div class="overlap-group">
              <div class="text-wrapper">Gender</div>
            </div>
          </div>
          <div class="group-3">
            <div class="overlap-group">
              <div class="text-wrapper-2">Password</div>
            </div>
          </div>
          <div class="group-4">
            <div class="overlap-group">
              <div class="text-wrapper-2">Email</div>
            </div>
          </div>
          <div class="group-5">
            <div class="overlap-group">
              <div class="text-wrapper-2">Age</div>
            </div>
          </div>
          <div class="group-6">
            <div class="overlap-group">
              <div class="text-wrapper-2">Confirm Password</div>
            </div>
          </div>
          <div class="group-7">
            <div class="overlap-2">
              <div class="text-wrapper-3">Sign Up</div>
            </div>
          </div>
          <p class="already-have-an">
            <span class="span">Already have an account?&nbsp;&nbsp;</span>
            <span class="text-wrapper-4">Sign In</span>
          </p>
          <div class="text-wrapper-5">EDUPLUS</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SignUp",
};
</script>

<style>
.sign-up {
  background-color: rgba(255, 255, 255, 1);
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
}

.sign-up .overlap-wrapper {
  background: linear-gradient(180deg, rgb(251, 199, 212) 0%, rgb(151, 150, 240) 100%);
  background-color: rgba(255, 255, 255, 1);
  height: 937px;
  width: 1920px;
}

.sign-up .overlap {
  height: 937px;
  position: relative;
}

.sign-up .rectangle {
  background-color: #ffffff6e;
  border-radius: 15px;
  height: 708px;
  left: 715px;
  position: absolute;
  top: 174px;
  width: 491px;
}

.sign-up .mask-group {
  height: 937px;
  left: 0;
  position: absolute;
  top: 0;
  width: 1920px;
}

.sign-up .group {
  height: 777px;
  left: 745px;
  position: absolute;
  top: 54px;
  width: 428px;
}

.sign-up .overlap-group-wrapper {
  height: 60px;
  left: 26px;
  position: absolute;
  top: 137px;
  width: 362px;
}

.sign-up .overlap-group {
  background-color: #f5f7f9;
  border-radius: 15px;
  box-shadow: 0px 0px 4px #00000029;
  height: 60px;
  position: relative;
  width: 360px;
}

.sign-up .text-wrapper {
  color: #1c1d1f;
  font-family: "Lato-Regular", Helvetica;
  font-size: 16px;
  font-weight: 400;
  left: 19px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 21px;
  white-space: nowrap;
}

.sign-up .div-wrapper {
  height: 60px;
  left: 26px;
  position: absolute;
  top: 214px;
  width: 362px;
}

.sign-up .div {
  color: #1c1d1f;
  font-family: "Lato-Regular", Helvetica;
  font-size: 16px;
  font-weight: 400;
  left: 16px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 21px;
  white-space: nowrap;
}

.sign-up .group-2 {
  height: 60px;
  left: 26px;
  position: absolute;
  top: 291px;
  width: 362px;
}

.sign-up .group-3 {
  height: 60px;
  left: 26px;
  position: absolute;
  top: 526px;
  width: 362px;
}

.sign-up .text-wrapper-2 {
  color: #1c1d1f;
  font-family: "Lato-Regular", Helvetica;
  font-size: 16px;
  font-weight: 400;
  left: 20px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 20px;
  white-space: nowrap;
}

.sign-up .group-4 {
  height: 60px;
  left: 26px;
  position: absolute;
  top: 444px;
  width: 362px;
}

.sign-up .group-5 {
  height: 60px;
  left: 26px;
  position: absolute;
  top: 367px;
  width: 362px;
}

.sign-up .group-6 {
  height: 60px;
  left: 26px;
  position: absolute;
  top: 608px;
  width: 362px;
}

.sign-up .group-7 {
  height: 48px;
  left: 26px;
  position: absolute;
  top: 690px;
  width: 362px;
}

.sign-up .overlap-2 {
  background-color: #161617;
  border-radius: 15px;
  height: 48px;
  position: relative;
  width: 360px;
}

.sign-up .text-wrapper-3 {
  color: #ffffff;
  font-family: "Lato-SemiBold", Helvetica;
  font-size: 16px;
  font-weight: 600;
  left: 147px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 15px;
  white-space: nowrap;
}

.sign-up .already-have-an {
  color: transparent;
  font-family: "Lato-Regular", Helvetica;
  font-size: 14px;
  font-weight: 400;
  left: 103px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 760px;
}

.sign-up .span {
  color: #000000;
}

.sign-up .text-wrapper-4 {
  color: #157afe;
  font-family: "Lato-Bold", Helvetica;
  font-weight: 700;
}

.sign-up .text-wrapper-5 {
  color: #000000;
  font-family: "Orbitron-Bold", Helvetica;
  font-size: 75px;
  font-weight: 700;
  left: 0;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 0;
}

</style>