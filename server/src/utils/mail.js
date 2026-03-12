import Mailgen from "mailgen";

const emailVerificationMailgenContent = (fullname, verificationUrl) => {
  return {
    body: {
      name: fullname,
      intro: "Welcome to our App! we're excited to have you on board.",
      action: {
        instructions: "To verify your email please click on the following button",
        button: {
          color: "#3d7217fc",
          text: "Verify your Email",
          link: verificationUrl
        }
      },
      outro: 
        "Need help, or have questions? Just reply to this email, we'd love to help.",
    },
  };
};

const forgotPasswordMailgenContent = (fullname, passwordResetUrl) => {
  return {
    body: {
      name: fullname,
      intro: "We got a request to reset the password of your account",
      action: {
        instructions: "To reset your password click on the following button or link",
        button: {
          color: "#3d7217fc",
          text: "Reset Password",
          link: passwordResetUrl
        }
      },
      outro: 
        "Need help, or have questions? Just reply to this email, we'd love to help.",
    },
  };
};

export{
  emailVerificationMailgenContent,
  forgotPasswordMailgenContent
};