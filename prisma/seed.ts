import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  // Create categories
  const catCultivo = await prisma.category.upsert({
    where: { name: 'Cultivo' },
    update: {},
    create: {
      name: 'Cultivo',
    },
  });
  const catSucculentas = await prisma.category.upsert({
    where: { name: 'Succulentas' },
    update: {},
    create: {
      name: 'Succulentas',
    },
  });
  const catPlagas = await prisma.category.upsert({
    where: { name: 'Control de Plagas' },
    update: {},
    create: {
      name: 'Control de Plagas',
    },
  });

  // Create tags
  const tagJardineria = await prisma.tag.upsert({
    where: { name: 'Jardinería' },
    update: {},
    create: {
      name: 'Jardinería',
    },
  });
  const tagMantenimiento = await prisma.tag.upsert({
    where: { name: 'Mantenimiento' },
    update: {},
    create: {
      name: 'Mantenimiento',
    },
  });

  // Create users
  const tefy = await prisma.user.upsert({
    where: { email: 'hola@laselvitadeconcreto.com' },
    update: {},
    create: {
      email: 'hola@laselvitadeconcreto.com',
      name: 'Stefany Mariano',
      admin: true,
      profile: {
        create: {
          bio: '🇩🇴 #huertoterraza Biofila 🐞 Jardinera 🌱🌻🌺 Succulover 🌵 Amante de la naturaleza y de los memes',
          avatar: '/tefy.jpg',
        },
      },
    },
  });
  const matera = await prisma.user.upsert({
    where: { email: 'matera@matas.com' },
    update: {},
    create: {
      email: 'matera@matas.com',
      name: 'Matera Random',
      profile: {
        create: {
          bio: 'Matera desde chiquitica',
        },
      },
    },
  });
  const succu = await prisma.user.upsert({
    where: { email: 'succulover@gmail.com' },
    update: {},
    create: {
      email: 'succulover@gmail.com',
      name: 'Succus Forever',
      profile: {
        create: {
          bio: 'La amante de las succulentas',
        },
      },
    },
  });

  // Create posts
  const post1 = await prisma.post.upsert({
    where: { slug: 'test-article-1' },
    update: {},
    create: {
      slug: 'test-article-1',
      title: 'Complete solution for your land & garden design',
      content:
        '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus porttitor tellus sed lacus elementum elementum. Vivamus egestas neque sed eros venenatis, ut sollicitudin metus tempor. Curabitur auctor arcu est, et maximus neque aliquet nec. Aliquam in dolor eu tortor luctus auctor.</p> <p>Nullam scelerisque ante pellentesque, hendrerit ex id, porta lectus. Integer maximus lobortis purus eget ullamcorper. Mauris est erat, sollicitudin nec porta sit amet, lobortis at turpis. Phasellus ligula mauris, eleifend nec dictum ut, sagittis nec orci. Aenean ut commodo magna.</p>',
      image: '/blog1.webp',
      status: 'PUBLISHED',
      authorId: tefy.id,
      categories: {
        connect: [{ name: catCultivo.name }, { name: catSucculentas.name }],
      },
      tags: {
        connect: [
          { name: tagJardineria.name },
          { name: tagMantenimiento.name },
        ],
      },
      likes: {
        create: [
          {
            userId: matera.id,
          },
          {
            userId: succu.id,
          },
        ],
      },
    },
  });
  const post2 = await prisma.post.upsert({
    where: { slug: 'test-article-2' },
    update: {},
    create: {
      slug: 'test-article-2',
      title: 'The environmental benefits of tower gardens',
      content:
        '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus porttitor tellus sed lacus elementum elementum. Vivamus egestas neque sed eros venenatis, ut sollicitudin metus tempor. Curabitur auctor arcu est, et maximus neque aliquet nec. Aliquam in dolor eu tortor luctus auctor.</p> <p>Nullam scelerisque ante pellentesque, hendrerit ex id, porta lectus. Integer maximus lobortis purus eget ullamcorper. Mauris est erat, sollicitudin nec porta sit amet, lobortis at turpis. Phasellus ligula mauris, eleifend nec dictum ut, sagittis nec orci. Aenean ut commodo magna.</p>',
      image: '/blog2.webp',
      status: 'PUBLISHED',
      authorId: tefy.id,
      categories: {
        connect: [{ name: catPlagas.name }, { name: catSucculentas.name }],
      },
      tags: {
        connect: [{ name: tagJardineria.name }],
      },
      likes: {
        create: [
          {
            userId: succu.id,
          },
        ],
      },
    },
  });

  // Create comments
  const comment1 = await prisma.comment.upsert({
    where: { id: 1 },
    update: {},
    create: {
      content: 'Mas succus por favor!',
      postId: post1.id,
      userId: succu.id,
    },
  });
  const comment2 = await prisma.comment.upsert({
    where: { id: 2 },
    update: {},
    create: {
      content: 'Ufff la amo!',
      postId: post2.id,
      userId: succu.id,
    },
  });
  const comment3 = await prisma.comment.upsert({
    where: { id: 3 },
    update: {},
    create: {
      content: 'Muy informativo. Gracias!',
      postId: post2.id,
      userId: matera.id,
    },
  });
}

main()
  .then(async () => {
    console.log('Seeds created!');
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
