import React, {useState} from 'react';
import {ComponentStory} from '@storybook/react';
import {Rating, RatingValueType} from "./Rating";
import {action} from "@storybook/addon-actions";

export default {
    title: 'Rating',
    component: Rating
    }

export const EmptyRating: ComponentStory<typeof Rating> = () => <Rating value={0} title={"EmptyRating"} setValue={x=>x} />
export const Rating1: ComponentStory<typeof Rating> = () => <Rating value={1} title={"Rating1"} setValue={action("clicked")} />
export const Rating2: ComponentStory<typeof Rating> = () => <Rating value={2} title={"Rating2"} setValue={action("clicked")} />
export const Rating3: ComponentStory<typeof Rating> = () => <Rating value={3} title={"Rating3"} setValue={action("clicked")} />
export const Rating4: ComponentStory<typeof Rating> = () => <Rating value={4} title={"Rating4"} setValue={action("clicked")} />
export const Rating5: ComponentStory<typeof Rating> = () => <Rating value={5} title={"Rating5"} setValue={action("clicked")} />
export const UncontrolledRating: ComponentStory<typeof Rating> = () => {
    const [value,setValue] = useState<RatingValueType>(4)
   return (
       <Rating value={value} title={"UncontrolledRating"} setValue={setValue} />
   )
}


