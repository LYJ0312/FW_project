function Cloths_M(temp) {
  const A = [
    {
      top: [
        {
          name: "Dress_1"
        },
        {
          name: "Dress_6"
        }
      ]
    },
    {
      bottom: [
        {
          name: "Dress_2"
        },
        {
          name: "Dress_5"
        }
      ]
    }
  ]
  const B = [
    {
      top: [
        {
          name: "Dress_4"
        },
        {
          name: "Dress_3"
        }
      ]
    },
    {
      bottom: [
        {
          name: "Dress_2"
        },
        {
          name: "Dress_2"
        }
      ]
    }
  ]
  const C = [
    {
      top: [
        {
          name: "Dress_1"
        },
        {
          name: "Dress_6"
        }
      ]
    },
    {
      bottom: [
          {
        name: "Dress_2"
      },
        {
          name: "Dress_2"
        }]
    }
  ]
  const D = [
    {
      top: [
        {
          name: "Dress_1"
        },
        {
          name: "Dress_6"
        }
      ]
    },
    {
      bottom: [
          {
        name: "Dress_2"
      },
        {
          name: "Dress_2"
        }]
    }
  ]
  const E = [
    {
      top: [
        {
          name: "Dress_1"
        },
        {
          name: "Dress_6"
        }
      ]
    },
    {
      bottom: [
        {
          name: "Dress_2"
        },
        {
          name: "Dress_2"
        }
      ]
    }
  ]

.i
  const t = eval(temp)[0].top[Math.floor(Math.random() * eval(temp)[0].top.length)];
  const b = eval(temp)[1].bottom[Math.floor(Math.random() * eval(temp)[1].bottom.length)];

  return [t.name, b.name];
}
