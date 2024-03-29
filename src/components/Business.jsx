import { features } from "../constants"
import styles, { layout } from "../style"
import Button from "./Button"
const FeaturedCard = ({ icon, title, content, index }) => (
<div className={`flex flex-row p-6 rounded-[20px] 
${ index !== index.length - 1 ? "mb-6" : "mb-0" } feature-card`}>
<div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
  <img src={icon} className="w-[50%] h-[50%] object-contain" />
</div>
  <div className="flex flex-col ml-3">
    <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1">
      {title}</h4>
    <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px] mb-1">{content}</p>

  </div>

</div>
)
const Business = () => {
  return (
    <section id="features" className={layout.section}>
      <div className={layout.sectionInfo}>
      <h1 className={styles.heading2}>You do the business <br className="sm:block hidden" />
      we'll handle the money </h1>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Quisque et ullamcorper nulla, id aliquet ante. 
        Nunc ornare risus in mollis ullamcorper.</p>
        <Button styles={`mt-10`} />
      </div>
      {/* featured */}
      <div className={`${layout.sectionImg} flex-col`}>
      {
        features.map((feature, index) => (
          <FeaturedCard key={feature.id} {...feature} index = {index} />
        ))
      }
      </div>
    </section>
  )
}

export default Business