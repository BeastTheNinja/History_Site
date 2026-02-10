import { Text } from "./Text"
import { Title } from "./Title"



export const HeaderText = () => {
    // Default header title + subtitle for the main view.
    return (
        <>
            <Title Title="ON THIS DAY" />
            <Text text="What happened on this day - historical events, deaths and births thoughout time" />
        </>

    )
}