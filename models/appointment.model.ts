import { model, models, Schema } from "mongoose";

interface IAppointment {
  email: string;
  appointment: string;
}

const appointmentSchema = new Schema<IAppointment>({
    email: {
        type: String,
        required: true,
    },
    appointment: {
        type: String,
        required: true,
    }
})

const Appointment = models.Appointment || model<IAppointment>("Appointment", appointmentSchema);

export { Appointment };