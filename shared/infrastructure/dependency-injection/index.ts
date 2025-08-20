import { Container } from "inversify";
import { bindDependencies as sharedBindDependencies } from "@l-p/shared/infrastructure/dependency-injection/bind-dependencies";
import { bindDependencies as coursesBindDependencies } from "@l-p/courses/infrastructure/dependency-injection/bind-dependencies";
import { bindDependencies as learnersBindDependencies } from "@l-p/learners/infrastructure/dependency-injection/bind-dependencies";
import { bindDependencies as certificationsBindDependencies } from "@l-p/certifications/infrastructure/dependency-injection/bind-dependencies";

export const container: Container = new Container();

function bindDependencies() {
  sharedBindDependencies(container);
  coursesBindDependencies(container);
  learnersBindDependencies(container);
  certificationsBindDependencies(container);
}

bindDependencies();
