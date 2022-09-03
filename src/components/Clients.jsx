import styles from "../style"
import { clients } from "../constants"
const Clients = () => (
    <section className={`${styles.flexCenter} my-4`}>
      <div className={`${styles.flexCenter} flex-wrap w-full gap-2`}>
    {clients.map((client) => (
      <div key={client.id} className={`${styles.flexCenter} flex-1 sm:min-w-[192px] min-w-[100px]`}>
        <img src={client.logo} alt="client" className="w-[100px] sm:w-[192px] object-contain cursor-pointer" />
        </div>
    ))}
      </div>
    </section> 
  )

export default Clients