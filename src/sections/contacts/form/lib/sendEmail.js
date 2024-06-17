import { Progress } from '../../../../constans/status'
import emailjs from '@emailjs/browser'

export const sendEmail = async (e, setStatus, setTimerId) => {
    e.preventDefault()
    setStatus(Progress.LOADING)

    try {
        await emailjs.sendForm(
            process.env.REACT_APP_SERVICE_ID,
            process.env.REACT_APP_TEMPLATE_ID,
            e.target,
            process.env.REACT_APP_PUBLICK_KEY
        )
        setStatus(Progress.SUCCESS)
        e.target.reset()
    } catch (error) {
        setStatus(Progress.ERROR)
        console.log(error)
    } finally {
        const t = setTimeout(() => {
            setStatus(Progress.IDLE)
            setTimerId(t)
        }, 3000)
    }
}
