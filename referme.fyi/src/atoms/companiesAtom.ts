import { Timestamp } from 'firebase/firestore';
import { atom } from 'recoil';

export interface Company {
    name: string;
    createdAt?: Timestamp;
    numberOfSubscribers: number;
    numberOfReferrals: number;
    imageURL?: string;
}