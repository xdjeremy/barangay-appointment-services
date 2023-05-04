import { model, models, Schema } from "mongoose";

interface IArchive {
  email: string;
  document: string;
}

const archiveSchema = new Schema<IArchive>({
  email: {
    type: String,
    required: true,
  },
  document: {
    type: String,
    required: true,
  },
});

const Archive = models.Archive || model<IArchive>("Archive", archiveSchema);

export { Archive };
