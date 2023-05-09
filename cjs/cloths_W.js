function Cloths_W(temp) {
  const A = [
    {
      top: [
        {
          name: "Dress_1",
          one_piece: "true"
        },
        {
          name: "Dress_6",
          one_piece: "false"
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
          name: "Dress_4",
          one_piece: "true"
        },
        {
          name: "Dress_3",
          one_piece: "false"
        }
      ]
    },
    {
      bottom: [
        {
          name: "Dress_1"
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
          name: "Dress_1",
          one_piece: "true"
        },
        {
          name: "Dress_6",
          one_piece: "false"
        }
      ]
    },
    {
      bottom: [
        {
          name: "Dress_3"
        },
        {
          name: "Dress_4"
        }]
    }
  ]
  const D = [
    {
      top: [
        {
          name: "Dress_1",
          one_piece: "true"
        },
        {
          name: "Dress_6",
          one_piece: "false"
        }
      ]
    },
    {
      bottom: [
        {
          name: "Dress_1"
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
          name: "Dress_1",
          one_piece: "true"
        },
        {
          name: "Dress_6",
          one_piece: "false"
        }
      ]
    },
    {
      bottom: [
        {
          name: "Dress_4"
        },
        {
          name: "Dress_5"
        }]
    }
  ]

  let b = {name:'Clean'};
  const t = eval(temp)[0].top[Math.floor(Math.random() * eval(temp)[0].top.length)];
  if (t.one_piece !== "true"){
    b = eval(temp)[1].bottom[Math.floor(Math.random() * eval(temp)[1].bottom.length)];
  }

  return [t.name, b.name];
}
