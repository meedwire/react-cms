import { ComponetType, ContentType } from "../../commonTypes";

export const data = {
  id: "576",
  contentName: "Ácido Acetilsalicílico",
  contentStructure: {
    0: {
      componentType: ComponetType.Tabs,
      props: {
        data: [
          {
            title: "Principal",
            contentId: "1231",
            color: "red",
          },
          {
            title: "Ajustes",
            contentId: "5465",
            color: "green",
          },
          {
            title: "Cuidados",
            contentId: "546s5",
            color: "yellow",
          },
        ],
      },
    },
    1: {
      componentType: ComponetType.Section,
      props: {
        headerTitle: "Nomes Comerciais",
        content: {
          0: {
            componentType: ContentType.SimpleText,
            props: {
              data: {
                0: {
                  content:
                    "Aspirina Prevent®, AAS®, Aceticil®, As-med®, Sedalive®, Aspirina®, LFM-Ácido Acetilsalicílico®, Ecasil-81®, Dormec®, Salipirin®, Salicetil®, AAS Protect®, Febridor®",
                },
              },
            },
          },
          1: {
            componentType: ContentType.Tags,
            props: {
              data: [
                {
                  title: "Genérico",
                  color: "yellow",
                  id: Math.random().toString(16),
                },
                {
                  title: "Farmácia Popular",
                  color: "red",
                  id: Math.random().toString(16),
                },
              ],
            },
          },
        },
      },
    },
    2: {
      componentType: ComponetType.Section,
      props: {
        headerTitle: "Classe",
        content: {
          0: {
            componentType: ContentType.SimpleText,
            props: {
              data: {
                0: { content: "Anti-inflamatório não esteroidal." },
              },
            },
          },
        },
      },
    },
    3: {
      componentType: ComponetType.Section,
      props: {
        headerTitle: "Mecanismo de Ação",
        content: {
          0: {
            componentType: ContentType.SimpleText,
            props: {
              data: {
                0: {
                  content:
                    "Inibe irreversivelmente as enzimas COX-1 e 2, resultando na diminuição da formação de precursores de prostaglandinas. Também inibe a agregação plaquetária, bloqueando a síntese do tromboxano A2 nas plaquetas. Tem propriedades antipiréticas, analgésicas e anti-inflamatórias.",
                },
              },
            },
          },
        },
      },
    },
    4: {
      componentType: ComponetType.Section,
      props: {
        headerTitle: "Tipo de Receituário",
        content: {
          0: {
            componentType: ContentType.SimpleTextParagraph,
            props: {
              data: {
                0: {
                  content:
                    "Alívio sintomático de cefaleia, odontalgia, dismenorreia, mialgia ou artralgia, lombalgia e dor artrítica de pequena intensidade;",
                },
                1: {
                  content:
                    "No resfriado comum ou na gripe, para o alívio sintomático da dor e da febre;",
                },
                2: {
                  content:
                    "Reduzir o risco de mortalidade em pacientes com suspeita de infarto agudo do miocárdio e em pacientes com antecedente de infarto do miocárdio;",
                },
                3: {
                  content:
                    "Profilaxia secundária de acidente vascular cerebral;",
                },
              },
            },
          },
        },
      },
    },
    5: {
      componentType: ComponetType.Section,
      props: {
        headerTitle: "Tipo de Receituário",
        content: {
          0: {
            componentType: ContentType.Tags,
            props: {
              data: [
                {
                  id: Math.random().toString(16),
                  title: "Sem Prescrição",
                  color: "lightblue",
                },
              ],
            },
          },
        },
      },
    },
  },
};
