interface TitleProps {
    Title: string;
}


export const Title = ({ Title }: TitleProps) => {

    return (
        <>
            <p>{Title}</p>

        </>
    )
}