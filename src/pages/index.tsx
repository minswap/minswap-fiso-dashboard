import { LogoFilled } from 'src/components/icons';
import { Layout } from 'src/components/Layout';

export default function ThankyouPage(): React.ReactElement {
  return (
    <Layout>
      <div className="flex-1 w-full px-2 lg:w-auto lg:pl-8 lg:px-0">
        <div className="p-6 sm:p-10 bg-white shadow-xl rounded-[30px]">
          <div className="flex">
            <div className="p-3 rounded-full bg-primary">
              <LogoFilled />
            </div>
            <div className="flex-1 ml-5 text-[40px] text-primary font-medium">Thank you</div>
          </div>
          <div className="mt-7 text-dark font-medium">
            Hi everyone 🖖​
            <br />
            <br />
            Thank you for participating in the FISO.
            <br />
            We are working on the final epoch&apos;s rewards and the claiming system. The system will go live on testnet
            on December 7th and mainnet on December 13th.&nbsp;
            <a
              className="text-primary hover:underline"
              href="https://medium.com/minswap/fair-iso-application-for-stake-pool-operators-begins-now-e6d563f85eec"
            >
              Read more
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
}
