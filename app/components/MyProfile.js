import Image from "next/image"

export default function MyProfile() {
  return (
    <section className="w-full mx-auto">
      <Image
        className="mx-auto mt-8 border-4 border-black rounded-full dark:border-slate-500 drop-shadow-xl shadow-black"
        src="/images/train.JPG"
        width={200}
        height={200}
        alt="random"
        priority={true}
      ></Image>
    </section>
  )
}
