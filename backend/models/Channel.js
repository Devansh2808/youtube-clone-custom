/**
 * Mongoose schema for the Channel model.
 *
 * Represents a YouTube-like channel with associated metadata and relationships.
 *
 * @typedef {Object} Channel
 * @property {string} channelId - Unique identifier for the channel.
 * @property {string} channelName - Name of the channel.
 * @property {string} [description] - Description of the channel.
 * @property {string} [channelBanner] - URL or path to the channel's banner image.
 * @property {string} [bannerPublicId] - Public ID for the banner image (e.g., for cloud storage).
 * @property {mongoose.Types.ObjectId} owner - Reference to the User who owns the channel.
 * @property {number} [subscribers=0] - Number of subscribers to the channel.
 * @property {mongoose.Types.ObjectId[]} [subscribersList] - List of User references who are subscribed.
 * @property {mongoose.Types.ObjectId[]} [videos] - List of Video references uploaded to the channel.
 * @property {Date} [createdAt] - Timestamp when the channel was created.
 * @property {Date} [updatedAt] - Timestamp when the channel was last updated.
 */
import mongoose from 'mongoose';

const channelSchema = new mongoose.Schema({
  channelId: { type: String, required: true, unique: true }, // important
  channelName: { type: String, required: true },
  description: { type: String },
  channelBanner: { type: String },
  bannerPublicId: { type: String },
  owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  subscribers: { type: Number, default: 0 },
  subscribersList: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  videos: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Video' }]
}, { timestamps: true });


export default mongoose.model('Channel', channelSchema);

