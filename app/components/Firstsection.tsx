import { FaApple } from "react-icons/fa";

const Firstsection = () => {
  return (
    <section className="py-[100px] font-Dmsans">
      <h1 className="text-[48px] font-bold text-center">Weclome Back</h1>{" "}
      <h4 className="text-center text-[24px] text-medium mt-[42px] mb-[25px]">
        Please enter your details.
      </h4>
      <div className="flex border-2 border-black rounded-[40px] h-[60px] justify-center hover:cursor-pointer items-center">
        <FaApple size={39} />
        <h2 className="text-[24px] font-medium ml-[12px] ">Login with Apple</h2>
      </div>
      <div className="flex items-center text-[24px] mt-[23px]">
        <div className="w-[179px] h-[4px] bg-[#D9D9D9]"></div>
        <h3 className="mx-[10px]">or</h3>
        <div className="w-[179px] h-[4px] bg-[#D9D9D9]"></div>
      </div>
      <form>
        <div className="w-[420px] border-2 border-black rounded-[40px] flex items-center mt-[26px]">
          <input
            className="w-[410px] pt-4 pb-[13px] pl-[37px] rounded-[40px] outline-none"
            type="email"
            placeholder="Email"
          />
          <svg
            className="mr-[41px]"
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M24.2188 12.1094C24.2188 18.7988 18.7988 24.2188 12.1094 24.2188C5.41992 24.2188 0 18.7988 0 12.1094C0 5.41992 5.41992 0 12.1094 0C18.7988 0 24.2188 5.41992 24.2188 12.1094ZM12.9395 17.6709L19.5557 11.0547C20.0146 10.5957 20.0146 9.85352 19.5557 9.39941L18.7256 8.56934C18.2666 8.11035 17.5244 8.11035 17.0703 8.56934L12.1094 13.5303L7.14844 8.56934C6.68945 8.11035 5.94727 8.11035 5.49316 8.56934L4.66309 9.39941C4.2041 9.8584 4.2041 10.6006 4.66309 11.0547L11.2793 17.6709C11.7383 18.1299 12.4805 18.1299 12.9395 17.6709Z"
              fill="#7A7676"
            />
          </svg>
        </div>

        <br />

        <div className="w-[420px] border-2 border-black rounded-[40px] flex items-center mt-[7px]">
          <input
            className="w-[410px] pt-4 pb-[13px] pl-[37px] rounded-[40px] outline-none"
            type="password"
            placeholder="Password"
          />
          <svg
            className="mr-[41px]"
            width="25"
            height="20"
            viewBox="0 0 25 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.4999 15.6251C9.53702 15.6251 7.13859 13.3317 6.91788 10.4255L2.82023 7.2587C2.28156 7.93448 1.78585 8.64893 1.38585 9.43018C1.29649 9.60694 1.24994 9.80223 1.24994 10.0003C1.24994 10.1984 1.29649 10.3937 1.38585 10.5704C3.50421 14.7036 7.69796 17.5001 12.4999 17.5001C13.5511 17.5001 14.5652 17.3439 15.5425 17.0915L13.5155 15.5231C13.1808 15.5878 12.8408 15.6219 12.4999 15.6251ZM24.7585 17.8946L20.4402 14.5571C21.7519 13.4516 22.8308 12.0963 23.614 10.57C23.7033 10.3933 23.7499 10.198 23.7499 9.99991C23.7499 9.80184 23.7033 9.60655 23.614 9.42979C21.4956 5.29659 17.3019 2.5001 12.4999 2.5001C10.4888 2.50254 8.51031 3.00884 6.74523 3.97276L1.7757 0.131743C1.71089 0.0813164 1.63679 0.0441535 1.55762 0.022378C1.47844 0.000602454 1.39576 -0.0053588 1.31428 0.00483485C1.2328 0.0150285 1.15413 0.0411773 1.08277 0.0817869C1.0114 0.122396 0.948736 0.176671 0.898353 0.241509L0.131556 1.22862C0.0298368 1.35947 -0.015743 1.52537 0.00484145 1.68982C0.0254259 1.85428 0.110489 2.00383 0.241322 2.10557L23.2241 19.8685C23.2889 19.9189 23.363 19.9561 23.4422 19.9778C23.5214 19.9996 23.6041 20.0056 23.6856 19.9954C23.767 19.9852 23.8457 19.959 23.9171 19.9184C23.9884 19.8778 24.0511 19.8235 24.1015 19.7587L24.8687 18.7716C24.9703 18.6407 25.0159 18.4748 24.9952 18.3103C24.9745 18.1458 24.8894 17.9963 24.7585 17.8946ZM17.5819 12.3478L16.0468 11.161C16.1761 10.7874 16.2446 10.3954 16.2499 10.0001C16.2575 9.4213 16.1293 8.84877 15.8755 8.32852C15.6217 7.80826 15.2495 7.35477 14.7886 7.00448C14.3278 6.65419 13.7912 6.41687 13.2221 6.31156C12.6529 6.20626 12.0669 6.23591 11.5112 6.39815C11.7468 6.71733 11.8742 7.10342 11.8749 7.5001C11.8691 7.63211 11.8489 7.76309 11.8148 7.89073L8.93937 5.66846C9.93819 4.83378 11.1982 4.37606 12.4999 4.3751C13.2387 4.37469 13.9704 4.51991 14.653 4.80244C15.3356 5.08498 15.9559 5.4993 16.4783 6.02171C17.0007 6.54412 17.415 7.16438 17.6976 7.84702C17.9801 8.52966 18.1253 9.2613 18.1249 10.0001C18.1249 10.845 17.9183 11.6325 17.5819 12.3481V12.3478Z"
              fill="#7A7676"
            />
          </svg>
        </div>

        <div className="w-[402px] flex justify-between items-center mt-[23px]">
          {" "}
          <div className="flex text-[#7A7676]  items-center">
            <input className="ouline-none w-[21px] h-[21px]" type="checkbox" />
            <h2 className="ml-[17px] text-[20px] font-medium">Remember</h2>
          </div>
          <h2 className="text-[#7A7676] text-[20px]">forgot password?</h2>
        </div>
        <button
          className="bg-[#FD950E] text-white h-[60px] rounded-[40px] text-[32px]  font-bold w-[402px] mt-[54px]"
          type="submit"
        >
          Log in
        </button>
      </form>
      <div>
        <h1 className="text-[#7A7676] text-center font-medium mt-[14px]">
          {" "}
          Dont have an account?
          <span className="text-black font-bold hover:cursor-pointer">
            Sign Up
          </span>
        </h1>
      </div>
    </section>
  );
};

export default Firstsection;
