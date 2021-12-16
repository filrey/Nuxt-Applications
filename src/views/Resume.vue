<template>
  <v-layout row justify-center align-center wrap class="mt-4 pt-2">
    <v-flex xs12 sm12 md5 lg6 xl6 class="mt-4 pt-4">
      <h2 class="mb-4 pl-4 pt-2">Education</h2>
      <v-card-text class="py-0">
        <v-timeline align-top dense>
          <v-timeline-item color="red" small>
            <v-layout pt-3>
              <v-flex xs4>
                <div class="caption font-weight-bold red--text">AUG 2019</div>
                <!-- <div class="caption font-weight-bold red--text">PRESENT</div> -->
              </v-flex>
              <v-flex class="pl-2">
                <strong>Bachelor of Science, Computer Science</strong>
                <div class="caption mb-2">
                  California State University Northridge
                </div>
              </v-flex>
            </v-layout>
          </v-timeline-item>
        </v-timeline>
      </v-card-text>
    </v-flex>
    <v-flex xs12 sm12 md4 lg6 xl6 class="mt-4 pt-2">
      <h2 class="mb-4 pl-4">Experience</h2>
      <v-card-text class="py-0">
        <v-timeline align-top dense>
          <v-timeline-item color="red" small>
            <v-layout pt-3>
              <v-flex xs4>
                <div class="caption font-weight-bold red--text">AUG 2018 -</div>
                <div class="caption font-weight-bold red--text">NOV 2019</div>
              </v-flex>
              <v-flex class="pl-2">
                <strong>Front End Engineering Lead</strong>
                <div class="caption mb-2">
                  Matador Emerging Technology and Arts Lab (META+LAB)
                </div>
              </v-flex>
            </v-layout>
          </v-timeline-item>

          <v-timeline-item color="red" small>
            <v-layout pt-3>
              <v-flex xs4>
                <div class="caption font-weight-bold red--text">OCT 2016 -</div>
                <div class="caption font-weight-bold red--text">AUG 2018</div>
              </v-flex>
              <v-flex class="pl-2">
                <strong>Front End Engineer</strong>
                <div class="caption mb-2">
                  Matador Emerging Technology and Arts Lab (META+LAB)
                </div>
              </v-flex>
            </v-layout>
          </v-timeline-item>

          <v-timeline-item color="red" small>
            <v-layout pt-3>
              <v-flex xs4>
                <div class="caption font-weight-bold red--text">AUG 2016 -</div>
                <div class="caption font-weight-bold red--text">OCT 2016</div>
              </v-flex>
              <v-flex class="pl-2">
                <strong>Explorer (Training for web development)</strong>
                <div class="caption mb-2">
                  Matador Emerging Technology and Arts Lab (META+LAB)
                </div>
              </v-flex>
            </v-layout>
          </v-timeline-item>
        </v-timeline>
      </v-card-text>
    </v-flex>
    <v-layout row justify-center align-center wrap class="mt-4 pt-2">
      <v-flex xs12 sm12 md4 lg5 xl5 class="mx-2 pt-4">
        <h2>
          <span>Frontend</span>

          <span class="red--text">Skills</span>
        </h2>
        <br />
        <v-chip
          v-for="skill in frontend"
          :key="skill.id"
          color="red"
          outline
          large
          >{{ skill }}</v-chip
        >
      </v-flex>
      <v-flex xs12 sm12 md4 lg5 xl5 class="mx-2 pt-4">
        <h2>
          <span>Backend</span>
          <span class="red--text">Skills</span>
        </h2>
        <br />
        <v-chip
          v-for="skill in backend"
          :key="skill.id"
          color="red"
          outline
          large
          >{{ skill }}</v-chip
        >
      </v-flex>
      <v-flex xs12 sm12 md4 lg5 xl5 class="mx-2 pt-4">
        <h2>
          <span>Workflow</span>

          <span class="red--text">Skills</span>
        </h2>
        <br />
        <v-chip
          v-for="skill in workflow"
          :key="skill.id"
          color="red"
          outline
          large
          >{{ skill }}</v-chip
        >
      </v-flex>
      <v-flex xs12 sm12 md4 lg5 xl5 class="mx-2 pt-4">
        <h2>
          <span>Design</span>

          <span class="red--text">Skills</span>
        </h2>
        <br />
        <v-chip
          v-for="skill in design"
          :key="skill.id"
          color="red"
          outline
          large
          >{{ skill }}</v-chip
        >
      </v-flex>
      <div class="mt-4 pt-2">
        <v-btn
          href="https://drive.google.com/open?id=1sZ9xtxoL7zoTen-CdcelTIt9nf2VaYHw"
          target="_blank"
          color="red"
          dark
          large
        >
          Download Resume
          <v-icon right dark>fas fa-file-download</v-icon>
        </v-btn>
      </div>
    </v-layout>
  </v-layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Resume",
    titleTemplate: "%s ← Filiberto Reyes, Web Developer",
    meta: [
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        name: "description",
        content:
          "Vue NUXT HTML CSS JavaScript Design Adobe XD Photoshop Coding Skills Resume Work Web Developer Front-End"
      },
      { charset: "utf-8" },
      { property: "og:title", content: "FilibertoReyes.dev" },
      { property: "og:site_name", content: "FilibertoReyes.dev" },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://filibertoreyes.dev/" },
      {
        property: "og:image",
        content: "https://i.imgur.com/QjYEm77.png"
      },
      {
        property: "og:description",
        content:
          "Vue NUXT HTML CSS JavaScript Design Adobe XD Photoshop Coding Skills Resume Work Web Developer Front-End"
      }
    ]
  },
  data() {
    return {
      value: 0,
      buffer1: 0,
      buffer2: 0,
      buffer3: 0,
      buffer4: 0,
      buffer5: 0,
      buffer6: 0,
      bufferValue: 100,
      interval: 0,

      frontend: [
        "VueJs",
        "NuxtJs",
        "AngularJs",
        "CSS3",
        "SCSS",
        "SASS",
        "Bootstrap",
        "Vuetify",
        "Javascript",
        "Gulp",
        "Webpack"
      ],
      backend: [
        "Node",
        "JSON",
        "MYSQL",
        "NoSQL",
        "SQL Server",
        "HTTP",
        "Axios",
        "RESTful web services",
        "Firebase"
      ],
      workflow: [
        "Git Version Control",
        "Node Package Manager (NPM)",
        "Yarn",
        "Scrum",
        "Agile",
        "Visual Studio Code"
      ],
      design: [
        "Photoshop",
        "Adobe XD",
        "Wireframing",
        "Responsive Design",
        "Interaction Design",
        "Animation"
      ]
    };
  },
  mounted() {
    this.startBuffer();
  },

  beforeDestroy() {
    clearInterval(this.interval);
  },

  methods: {
    startBuffer() {
      this.interval = setInterval(() => {
        this.buffer1 = 90;
        this.buffer2 = 85;
        this.buffer3 = 80;
        this.buffer4 = 80;
        this.buffer5 = 90;
        this.buffer6 = 70;
      }, 800);
    }
  }
};
</script>
<style></style>
