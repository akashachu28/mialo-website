import { Card } from '@/components/Card';

export default function About() {
  return (
    <div>
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">About Mialo</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              We're a team of passionate developers and designers committed to 
              building exceptional digital experiences that make a difference.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Founded in 2024, Mialo started with a simple mission: to create 
                web solutions that are both beautiful and functional. We believe 
                that great design and powerful technology should go hand in hand.
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                Today, we work with clients around the world, helping them bring 
                their digital visions to life with cutting-edge technology and 
                thoughtful design.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card
              title="Innovation"
              description="We constantly explore new technologies and approaches to deliver cutting-edge solutions."
            />
            <Card
              title="Quality"
              description="Every project we undertake is built with attention to detail and commitment to excellence."
            />
            <Card
              title="Collaboration"
              description="We believe in working closely with our clients to understand their needs and exceed expectations."
            />
          </div>
        </div>
      </section>
    </div>
  );
}
