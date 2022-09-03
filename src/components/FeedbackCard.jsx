import { quotes } from "../assets"

const FeedbackCard = ({content, name, title, img}) => (
    <div className="flex justify-between flex-col px-10 py-12 rounded-[20px
    max-w-[370px] md:mr-10 sm:mr-5 my-5 feedback-card">
      {/* leftside gradient div */}
      <div className="absolute z-0 w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient " />
      <img src={quotes} alt="double quotes" className="w-[42px] h-[27px] object-contain" />
      <p className="font-poppins font-normal text-white text-[18px] leading-[32px] my-10">{content}</p>
      {/* img and other content */}
      <div className="flex flex-row">
      <img src={img} className="w-[48px] h-[48px] rounded-full" />
      <div className="flex flex-col ml-4">
        <h4 className="font-poppins font-semibold text-white text-[20px] leading-[32px]">{name}</h4>
        <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">{title}</p>
      </div>
      </div>
    </div>
  )

export default FeedbackCard