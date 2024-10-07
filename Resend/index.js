import { Resend } from 'resend';

const resend = new Resend('re_RDhUvQHf_9PnMsLcZVYKcEFXd7KFVJSRf');

(async function () {
  const { data, error } = await resend.emails.send({
    from: 'Acme <onboarding@resend.dev>',
    to: ['nahuel7474@gmail.com'],
    subject: 'Cabañas Nahuel',
    html: '<strong>Funciona!</strong>',
  });

  if (error) {
    return console.error({ error });
  }

  console.log({ data });
})();
