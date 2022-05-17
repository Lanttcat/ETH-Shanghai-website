import Image from 'next/image'

export const Banner = () => {
  return (
    <section className="relative bottom-26 z-0 flex bg-no-repeat">
      <div className="block w-full">
        <Image src={'/images/banner.svg'} layout="fill" objectFit="cover" alt={'TODO'} />
      </div>
    </section>
  )
}
