# Learning Platform - Modular Monolith Architecture

## 🎯 Project Purpose

This project is designed as a **learning laboratory** for building experience with modern enterprise architecture patterns. The primary goals are to:

- **Master Modular Monolith Architecture** - Learn how to structure large applications with clear module boundaries while maintaining a single codebase
- **Implement Domain-Centric Design** - Practice Domain-Driven Design (DDD) principles with proper separation of concerns
- **Explore Event-Driven Design** - Understand how to build loosely coupled systems using domain events and event sourcing patterns
- **Practice Clean Architecture** - Implement layered architecture with proper dependency inversion and separation of technical concerns from business logic

## 🏗️ Architecture Overview

This project demonstrates a **Modular Monolith** approach where:

- Each module (`courses`, `learners`, `certifications`) is a self-contained unit with its own domain models, services, and infrastructure
- Modules communicate through well-defined interfaces and domain events
- Shared infrastructure and utilities are centralized in the `shared` module
- The `gateway` module provides a unified API entry point

<img width="683" height="737" alt="a" src="https://github.com/user-attachments/assets/3a9fdcea-ccf5-4480-be75-3be4c5ceb33f" />

### Architectural Principles

- **Domain-Centric**: Business logic is organized around domain concepts, not technical concerns
- **Process-Based Services**: Services map to business processes rather than entity operations
- **Event-Driven**: Domain events enable loose coupling between modules
- **Dependency Inversion**: High-level modules don't depend on low-level modules
- **Single Responsibility**: Each class and module has one clear purpose

## 📊 Data Model

The project implements a rich domain model following Domain-Driven Design principles. Here's the core data structure:

### 🎓 **Core Learning Entities**

#### **Course Aggregate**
```typescript
Course {
  id: ModelId
  title: CourseTitle (Value Object)
  description: CourseDescription (Value Object)
  instructorId: ModelId
  status: CourseStatus (DRAFT | PUBLISHED | ARCHIVED)
  chapters: Chapter[]
  assessments: Assessment[]
  
  // Business Methods
  publish(): void
  archive(): void
  addChapter(chapter: Chapter): void
  addAssessment(assessment: Assessment): void
}
```

#### **Chapter Aggregate**
```typescript
Chapter {
  id: ModelId
  title: ChapterTitle (Value Object)
  description: ChapterDescription (Value Object)
  order: ItemOrder (Value Object)
  courseId: ModelId
  lessons: Lesson[]
  assessments: Assessment[]
  
  // Business Methods
  addLesson(lesson: Lesson): void
  addAssessment(assessment: Assessment): void
}
```

#### **Lesson Aggregate**
```typescript
Lesson {
  id: ModelId
  title: LessonTitle (Value Object)
  content: LessonContent (Value Object)
  order: ItemOrder (Value Object)
  chapterId: ModelId
  assessments: Assessment[]
  
  // Business Methods
  addAssessment(assessment: Assessment): void
}
```

#### **Instructor Aggregate**
```typescript
Instructor {
  id: ModelId
  name: InstructorName (Value Object)
  bio: InstructorBio (Value Object)
  courses: Course[]
  
  // Business Methods
  addCourse(course: Course): void
}
```

#### **Assessment Aggregate**
```typescript
Assessment {
  id: ModelId
  title: AssessmentTitle (Value Object)
  description: AssessmentDescription (Value Object)
  questions: Question[]
  
  // Business Methods
  addQuestion(question: Question): void
}
```

### 🔗 **Entity Relationships**

```
Instructor (1) ←→ (N) Course
    ↓
Course (1) ←→ (N) Chapter
    ↓
Chapter (1) ←→ (N) Lesson
    ↓
Course/Chapter/Lesson (1) ←→ (N) Assessment
    ↓
Assessment (1) ←→ (N) Question
```

### 🏷️ **Value Objects**

The domain uses **Value Objects** to encapsulate business rules and ensure data integrity:

- **CourseTitle**: Validates course naming conventions
- **CourseDescription**: Ensures description meets requirements
- **ItemOrder**: Manages ordering with business validation
- **ModelId**: Unique identifier with validation
- **InstructorName**: Instructor name validation
- **InstructorBio**: Bio content validation

### 📋 **Domain Events**

The system publishes domain events for important business state changes:

- **CoursePublishedEvent**: When a course moves from draft to published
- **CourseArchivedEvent**: When a course is archived
- **ChapterAddedEvent**: When a new chapter is added to a course
- **LessonAddedEvent**: When a new lesson is added to a chapter

### 🏛️ **Aggregate Design**

- **Course** is the main aggregate root, managing chapters and lessons
- **Chapter** manages its lessons and maintains order
- **Lesson** is the smallest content unit
- **Instructor** manages course associations
- **Assessment** can be attached to any content level

### 🔒 **Business Rules & Invariants**

- Course status transitions: DRAFT → PUBLISHED → ARCHIVED
- Chapter and lesson ordering must be unique within their parent
- Instructor must exist before course creation
- Course must exist before chapter creation
- Chapter must exist before lesson creation


<img width="1321" height="695" alt="d" src="https://github.com/user-attachments/assets/d9afc7c9-fd77-4a05-944c-eac53c4a6e98" />


## 📦 Project Modules

### 🎓 **Courses Module** (`/courses`)
**Purpose**: Manages course creation, content organization, and lifecycle management

**Structure**:
- **Domain Layer**: Course, Chapter, Lesson models with rich business logic
- **Application Layer**: Command/Query handlers implementing CQRS pattern
- **Infrastructure Layer**: In-memory repositories and event mappers
- **API Layer**: REST endpoints for course operations

**Key Features**:
- Course creation with instructor assignment
- Hierarchical content organization (Course → Chapter → Lesson)
- Course status management (draft, published, archived)
- Event-driven architecture with domain events

### 👥 **Learners Module** (`/learners`)
**Purpose**: Manages learner profiles, enrollments, and learning progress

**Structure**:
- **Domain Layer**: Learner models and enrollment logic
- **Application Layer**: Learner management handlers
- **Infrastructure Layer**: Learner data persistence
- **API Layer**: Learner-related endpoints

### 🏆 **Certifications Module** (`/certifications`)
**Purpose**: Handles certification programs, assessments, and credentialing

**Structure**:
- **Domain Layer**: Certification models and assessment logic
- **Application Layer**: Certification workflow handlers
- **Infrastructure Layer**: Certification data management
- **API Layer**: Certification endpoints

### 🔧 **Shared Module** (`/shared`)
**Purpose**: Provides common infrastructure and utilities across all modules

**Components**:
- **Domain Contracts**: Base interfaces for commands, queries, and events
- **Infrastructure**: Dependency injection container, logging, event bus
- **Common Models**: Value objects, entities, and aggregate roots
- **Utilities**: ID generation, exception handling, and common patterns

### 🌐 **Gateway Module** (`/gateway`)
**Purpose**: Unified API entry point and request routing

**Features**:
- Centralized routing to module-specific handlers
- Global exception handling and error responses
- Request validation and authentication (planned)
- API documentation and monitoring (planned)

## ✨ Current Features

### ✅ **Implemented**

#### **Course Management**
- ✅ Course creation with instructor assignment
- ✅ Chapter and lesson creation within courses
- ✅ Course status transitions (draft → published → archived)
- ✅ Hierarchical content organization
- ✅ Domain event publishing for status changes

#### **Instructor Management**
- ✅ Instructor profile creation
- ✅ Instructor-course association
- ✅ Instructor listing and retrieval

#### **Content Organization**
- ✅ Chapter ordering and management
- ✅ Lesson creation within chapters
- ✅ Content hierarchy validation

#### **Architecture Patterns**
- ✅ Command Query Responsibility Segregation (CQRS)
- ✅ Domain Events with event bus
- ✅ Dependency Injection with InversifyJS
- ✅ Repository pattern with in-memory implementations
- ✅ Process-based service organization
- ✅ Interface segregation for handlers

#### **Technical Infrastructure**
- ✅ TypeScript with strict typing
- ✅ Express.js API framework
- ✅ Modular monolith structure
- ✅ Clean architecture layers
- ✅ Exception handling and error responses

### 🚧 **In Progress / Planned**

#### **Short Term**
- 🔄 Learner enrollment system
- 🔄 Course progress tracking
- 🔄 Basic authentication and authorization
- 🔄 Input validation and sanitization
- 🔄 API documentation with OpenAPI/Swagger

#### **Medium Term**
- 📋 Assessment and quiz system
- 📋 Certification workflow
- 📋 Learning analytics and reporting
- 📋 File upload for course materials
- 📋 Search and filtering capabilities

#### **Long Term**
- 🎯 Advanced analytics and insights
- 🎯 Multi-tenant support
- 🎯 Integration with external LMS systems
- 🎯 Mobile app support
- 🎯 Advanced assessment types (essays, peer reviews)

## 🛠️ Technology Stack

- **Language**: TypeScript 4.5+
- **Runtime**: Node.js
- **Framework**: Express.js 5.1+
- **Dependency Injection**: InversifyJS
- **Architecture**: Modular Monolith with Clean Architecture
- **Patterns**: CQRS, Event Sourcing, Repository, Domain Events
- **Testing**: Jest (planned)
- **Database**: In-memory (planned: PostgreSQL)
- **API**: RESTful with potential GraphQL support

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation
```bash
# Clone the repository
git clone <repository-url>
cd learning-platform

# Install dependencies
npm install

# Start development server
npm run dev
```

### Project Structure
```
learning-platform/
├── courses/                 # Course management module
│   ├── domain/             # Business logic and models
│   ├── application/        # Use cases and handlers
│   ├── infrastructure/     # Data access and external services
│   └── api/               # REST endpoints and DTOs
├── learners/               # Learner management module
├── certifications/         # Certification module
├── shared/                 # Common infrastructure
├── gateway/                # API gateway and routing
└── package.json           # Workspace configuration
```

## 📚 Learning Resources

This project demonstrates several key architectural concepts:

- **Modular Monolith**: [Martin Fowler's Article](https://martinfowler.com/articles/microservices.html#MonolithFirst)
- **Domain-Driven Design**: [Eric Evans' Book](https://www.domainlanguage.com/ddd/)
- **Clean Architecture**: [Robert C. Martin's Book](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html)
- **Event-Driven Architecture**: [Patterns and Best Practices](https://martinfowler.com/articles/201701-event-driven.html)

## 🤝 Contributing

This is a learning project, but contributions are welcome! Please:

1. Focus on architectural improvements and learning opportunities
2. Maintain the modular structure and clean architecture principles
3. Add comprehensive tests for new features
4. Document architectural decisions and trade-offs

## 📝 License

This project is for educational purposes. Feel free to use it as a reference for learning enterprise architecture patterns.

---

**Happy Learning! 🎓**

*This project demonstrates how to build scalable, maintainable applications using modern architectural patterns while keeping the complexity manageable.*
