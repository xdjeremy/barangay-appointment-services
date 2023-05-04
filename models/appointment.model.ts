import {model, models, Schema} from "mongoose";

interface IAppointment {
    user: any;
    appointment_type: string;
}

const appointmentSchema = new Schema<IAppointment>({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    appointment_type: {
        type: String,
        required: true
    }
})

const Appointment = models.Appointment || model('Appointment', appointmentSchema);

export {Appointment};