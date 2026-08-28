"use client";
import { birthdayData } from "@/data/birthday-data";
import { Hero } from "./Hero";
import { Beginning } from "./Beginning";
import { FirstPhoto } from "./FirstPhoto";
import { Story } from "./Story";
import { MemoryGallery } from "./MemoryGallery";
import { Reasons } from "./Reasons";
import { EmotionalSection } from "./EmotionalSection";
import { BirthdayReveal } from "./BirthdayReveal";
import { Gift } from "./Gift";
import { Letter } from "./Letter";
import { FinalScene } from "./FinalScene";
import { MusicPlayer } from "./MusicPlayer";
import { CustomCursor } from "./CustomCursor";
export function BirthdayExperience() { return <main><CustomCursor /><MusicPlayer src={birthdayData.musicSrc} /><Hero title={birthdayData.opening} /><Beginning date={birthdayData.birthday} text={birthdayData.beginningText} /><FirstPhoto src={birthdayData.firstPhoto} title={birthdayData.firstPhotoText} subtitle={birthdayData.firstPhotoSubtext} /><Story items={birthdayData.story} /><MemoryGallery memories={birthdayData.memories} /><Reasons reasons={birthdayData.reasons} /><EmotionalSection src={birthdayData.emotionalPhoto} /><BirthdayReveal name={birthdayData.name} /><Gift title={birthdayData.giftTitle} message={birthdayData.giftMessage} url={birthdayData.giftUrl} /><Letter letter={birthdayData.letter} /><FinalScene message={birthdayData.finalMessage} name={birthdayData.name} signature={birthdayData.finalSignature} /></main>; }
