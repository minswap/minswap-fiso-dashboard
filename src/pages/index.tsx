import { LogoFilled } from 'src/components/icons';
import { Layout } from 'src/components/Layout';

export default function ThankyouPage(): React.ReactElement {
  return (
    <Layout>
      <div className="flex-1 px-2 w-full lg:px-0 lg:pl-8 lg:w-auto">
        <div className="p-6 sm:p-10 bg-white shadow-xl rounded-[30px]">
          <div className="flex">
            <div className="p-3 rounded-full bg-primary">
              <LogoFilled />
            </div>
            <div className="flex-1 ml-5 text-[40px] text-primary font-medium">Thank you</div>
          </div>
          <div className="mt-7 font-medium text-dark">
            Hi everyone 🖖​
            <br />
            <br />
            Thank you for participating in the FISO.
            <br />
            We are working on the final epoch&apos;s rewards and the claiming system. The system will go live on testnet
            on December 7<sup>th</sup> and mainnet on December 13<sup>th</sup>.&nbsp;
            <a
              className="hover:underline text-primary"
              href="https://medium.com/minswap/fiso-has-ended-whats-next-c29b3cca25d5"
              rel="noopener noreferrer"
              target="_blank"
            >
              Read more
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
}
