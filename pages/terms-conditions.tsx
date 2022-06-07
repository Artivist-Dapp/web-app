import { NextPage } from "next";
import IconDot from "../components/icons/icon_dot";

interface Props {
  className?: string;
}

const TermsConditions: NextPage<Props> = ({ className }) => {
  return (
    <>
      <div className={`${className} page-max-width space-y-10 mt-20`}>
        <div className="space-y-5 lg:space-y-10 text-paragraph">
          <IconDot className="w-4 aspect-square" />
          <h4 className="text-5xl lg:text-7xl leading-none font-alfaslabone">
            Terms & Conditions
          </h4>
        </div>
        <div className="space-y-4 text-xl leading-snug tracking-wide">
          <p>
            Regulation (EU) 2016/679 OF THE EUROPEAN PARLIAMENT AND THE COUNCIL
            of April 27, 2016 on the protection of individuals with regard to
            the processing of personal data is applicable as of May 25, 2018 and
            strengthens security and control in the protection of your personal
            encounter. The company intends to keep in touch with you and inform
            you about everything related to the website, respecting the legal
            and privacy regulations of your data.
          </p>
          <p>
            The company is the entity responsible for the processing of personal
            data. You assume the commitment that the processing of personal data
            will be done according to the law. When consulting or navigating our
            WEB page, some data, including personal data, can be obtained
            passively and without these mentions being expressly indicated from
            the use of different technologies, such as Cookies.
          </p>
          <p>
            In addition, in some sections of our website, on social media pages,
            remarketing or in events where electronic data is collected, you may
            be invited to transmit personal data directly to us as a condition
            for using some features , such as receiving newsletters and
            promotional alerts, to contact us for purposes of participating in
            contests, sending complaints, applications, commercial campaigns,
            quality and satisfaction surveys and providing customer support
            services.
          </p>
          <p>
            The personal data we collect refers to your name, postal and e-mail
            address, telephone number, date of birth, tax and/or identification
            number. We ask that you do not transmit to us sensitive personal
            data such as racial, religious, political, philosophical, health,
            criminal background, union membership, or other electronic means.
            This information, if necessary for any specific purpose, such as
            sending job applications, complaints, requests for financing or
            insurance, should only be provided in person and never through the
            WEB.
          </p>
          <p>
            We have the technical means to ensure the security of your personal
            data, but you should be aware that the use of websites and the
            transmission of information electronically may be subject to access
            by unauthorized third parties. We may associate your data with other
            personal data previously transmitted or obtained, such as your
            history as our customer, or posted on web pages and social networks.
            In case we associate data from other sources, we guarantee that the
            same association will be made in accordance with the Law.
          </p>
          <p>
            The collection of personal data directly, through the WEB, social
            pages, or other electronic means of data collection, will not be
            handled by the company, except for the specific purposes for which
            they are intended and as indicated on the site where the collection
            is fulfilled.
          </p>
          <p></p>
          <p>
            The company processes personal data on its own behalf, but may also
            do so on behalf and on behalf of third parties in the following
            situations: for compliance with legal obligations to provide
            information to official entities; taxes, customs or other entities.
            <br />
            If you receive any contact from us, for the promotion of goods or
            services or for a purpose not expressly contemplated in the
            electronic collection site, it is because these data are included in
            our database, which is prior to May 25, 2018 , and was previously
            controlled by the supervisory authority in Portugal, CNPD, which
            legitimizes their treatment, or because, after that date, you have
            expressly authorized us to do so already under the provisions of
            Regulation (EU) 2016/679.
          </p>
          <p>
            We remind you that you may, at no cost, exercise the right to
            withdraw previously granted consent, request the correction,
            modification, restriction, anonymization or deletion of your
            personal data, request an explanation of the processing and exercise
            the right to complain to the supervisory authority. These rights can
            be exercised by e-mail (artivist.dapp@gmail.com) or letter to,
            address, Artivist DAO. Praça A, 60 1º Esquerdo Creixomil, Guimarães,
            Portugal addressed to the Marketing Department.
          </p>
          <p>
            If you withdraw the consent previously given and request that no
            contact be made, whatever the means of communication, such as
            e-mail, SMS, MMS or telephone, what we do after that request will be
            necessary as part of the preparation, conclusion or execution of
            contracts or whenever, regardless of these situations, they are
            based on legitimate interest.
          </p>
          <p>
            We store your personal data for a period of 10 years, which we
            consider indispensable and adequate for the purposes for which it is
            intended and which corresponds to the legal period for the storage
            of accounting documents.
          </p>
        </div>
      </div>
    </>
  );
};

export default TermsConditions;
