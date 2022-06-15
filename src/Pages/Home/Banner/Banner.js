import sample from "../../../assets/vedio/cover.mp4";
import "./Banner.css";

const Banner = () => {
  return (
    <section>
      <video className="videoTag w-full" autoPlay loop muted>
        <source src={sample} type="video/mp4" />
      </video>
      <article className="textContainer">
        <p className="text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis,
          voluptatum officiis aut laborum dicta ab perspiciatis. Harum accusamus
          laudantium veritatis sapiente tenetur consectetur mollitia officia
          quas modi incidunt sit error quaerat commodi amet illum, excepturi
          recusandae in aliquid porro! Ipsum sapiente, dignissimos ratione modi
          esse cumque odio necessitatibus minus iusto repudiandae molestias
          velit numquam pariatur aspernatur perferendis voluptatem, culpa, ea
          commodi nisi exercitationem non? Unde animi aliquam distinctio tenetur
          debitis laboriosam dicta molestiae ullam quasi dolorem iste deserunt
          praesentium repellat reprehenderit, suscipit minus, deleniti
          perferendis doloremque? Eius enim beatae distinctio totam quod
          necessitatibus, inventore voluptatum quasi ut quidem aperiam dolor!
        </p>
      </article>
    </section>
  );
};

export default Banner;
