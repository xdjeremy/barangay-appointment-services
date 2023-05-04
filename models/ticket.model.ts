import { model, models, Schema } from "mongoose";

interface ITicket {
  email: string;
  subject: string;
  message: string;
}

const ticketSchema = new Schema<ITicket>({
  email: {
    type: String,
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
});

const Ticket = models.Ticket || model<ITicket>("Ticket", ticketSchema);

export { Ticket };
