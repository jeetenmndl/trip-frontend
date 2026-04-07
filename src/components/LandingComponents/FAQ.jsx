import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const FAQ = () => {
    return (
        <section className='px-20 py-20 w-1/2 mx-auto'>
            {/* heading */}
            <div>
                <h2 className='text-5xl font-bold text-center mb-16'>Frequently Asked Questions</h2>
            </div>

            <div>
                <Accordion type="single" collapsible defaultValue="item-1">
                    <AccordionItem value="item-1">
                        <AccordionTrigger>How to invite collaborators?</AccordionTrigger>
                        <AccordionContent>
                            To invite collaborators, simply navigate to the project settings and click on the "Invite Collaborators" button. Enter their email addresses and send the invitations. They will receive an email with instructions to join the project.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-2">
                        <AccordionTrigger>
                            Is there any offers available?
                        </AccordionTrigger>
                        <AccordionContent>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta omnis ea cum consequatur praesentium. Aliquam consequuntur corrupti vitae architecto sapiente accusantium vero error eaque sint.
                        </AccordionContent>
                    </AccordionItem>

                </Accordion>
            </div>

        </section>
    )
}

export default FAQ