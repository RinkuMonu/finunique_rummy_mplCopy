import { useEffect } from "react";
import { Link } from 'react-router-dom';

const ContactSupport = () => {
  useEffect(() => {
    const scriptId = "spd-busns-spt";
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.async = true;
      script.setAttribute("data-self-init", "false");
      script.setAttribute("data-init-type", "opt");
      script.src = "https://cdn.freshbots.ai/assets/share/js/freshbots.min.js";
      script.setAttribute("data-client", "ee6f4504eca4a8eee3c45b04241f4426a575de3a");
      script.setAttribute("data-bot-hash", "608c098b5541457f73d599de15881f36cec983c2");
      script.setAttribute("data-env", "prod");
      script.setAttribute("data-region", "us");
      script.onload = () => {
        if (window.Freshbots) {
          window.Freshbots.initiateWidget({ autoInitChat: false }, () => {}, () => {});
        }
      };
      document.body.appendChild(script);
    }
  }, []);

  return (
    <article className="container mb-5 p-4 rounded shadow-lg" style={{marginTop:"80px"}}>
      <header className="mb-4 text-center ">
        <h1 className="h3">Contact Support</h1>
      </header>
      <div className="entry-content">
        <p>
          If you are facing any issues with the Finunique Small Private Limites app, we’re here to help you out. Your query might already be answered in our FAQ sections. Check out specific FAQs on
          <Link href="#" className="mx-1">KYC / Withdrawal</Link>,
          <Link href="#" className="mx-1">Fantasy FAQs</Link>,
          <Link href="#" className="mx-1">Games</Link>, and
          <Link href="#" className="mx-1">Sharing</Link>.
        </p>
        <p>
          You can also reach out to customer support from Finunique Small Private Limites Helpdesk at
          <Link href="mailto:community@Finunique Small Private Limitesgaming.com" className="mx-1">@Finuniquerummy.com</Link>
          or connect to an Finunique Small Private Limites executive via In-App chat and have your queries resolved.
        </p>
      </div>
    </article>
  );
};

export default ContactSupport;
